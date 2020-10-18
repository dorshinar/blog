---
title: "Avoiding impossible state with TypeScript"
date: "2020-10-25"
description: "Typescript's greatest strength, in my opinion is it's ability to disallow forbidden state."
slug: "/avoid-impossible-state-with-typescript"
---

I love [TypeScript](https://www.typescriptlang.org/). I've been using it for over 2 years in various projects, and the more I use it the less compelling I find vanilla Javascript. Not that there is anything wrong with vanilla Javascript ([my blog](https://dorshinar.me/) is vanilla!), but I think that as when it comes to medium to large projects, Typescript makes a lot of things easier.

Among the many good things Typescript offers, I'd like to address one that, in my experience, has saved me quite a few bugs.

Let's start with an example first.

Say, we work on an app that manages supply in a computer hardware store. Currently, the store only sells PCs.

Our basic type would be, then, the `Computer`:

```typescript
type CPU = "Intel Core i9-10850K" | "AMD Ryzen 9 5950X";

type GPU = "Iris Plus Graphics 655" | "Nvidia GEFORCE RTX 3090";

interface Computer {
  cpu: CPU;
  gpu: GPU;
  brand: string;
  modelName: string;
}
```

In order to display the available PCs in the store, we can use a component like so:

```tsx
import React from "react";

const PC: React.FC<Computer> = ({ computer }) => (
  <div>
    <h3>{computer.modelName}</h3>
    <h4>{computer.brand}</h4>
    <div>
      <CPU>{computer.cpu}</CPU>
      <GPU>{computer.gpu}</GPU>
    </div>
  </div>
);
```

Very simple right?

Let's add a very basic test for the component.

```typescript
import { render } from "react-dom";

it("renders without crashing", () => {
  const computer: Computer = {
    cpu: "Intel Core i9-10850K",
    gpu: "Iris Plus Graphics 655",
    brand: "UltraPCs",
    modelName: "Mega 5",
  };

  render(<PC computer={computer} />, container);
});
```

## When specs change

Most apps aspire to keep evolving over time, so demands are never standing still. Let's say, that our store wants to expand, and sell laptops as well as PCs.

That shouldn't be too hard right? We have Typescript! We can re-factor all we want with absolute confidence.

Laptop have one special things PCs don't have, and that's a screen. To overcome this obstacle, we will add a `screenSize` field to our `Computer` interface.

```typescript
interface Computer {
  cpu: CPU;
  gpu: GPU;
  brand: string;
  modelName: string;
  // highlight-next-line
  screenSize: number | undefined;
}
```

`screenSize` can be undefined because, as we've established before, PCs have no screen. We could use 0, but I prefer more direct approaches to inexistent values.

A while later, we decide we want to emphasize the specs of our laptops over the brand and model, so we create a special component for it.

```tsx
import React from "react";

const Laptop: React.FC<Computer> = ({ computer }) => (
  <div>
    <h3>
      <CPU>{computer.cpu}</CPU>
    </h3>
    <h4>
      <GPU>{computer.gpu}</GPU>
    </h4>
    <div>
      <span>{computer.modelName}</span>
      <span>{computer.brand}</span>
    </div>
    <span>screen size: {computer.screenSize}</span>
  </div>
);
```

Rendering our long inventory list, is a `ComputersList` component. This component is in charge of deciding which type of device every computer is, and based on that render the correct component.

```typescript
import React from "react";

const ComputersList: React.FC<Computer[]> = ({ computers }) => {
  return computers.map((computer) =>
    Boolean(computer.screenSize) ? (
      <Computer computer={computer} />
    ) : (
      <PC computer={computer} />
    )
  );
};
```

If our computer has a `screenSize` field (that is different form 0, and therefore truthy), it's obviously a laptop, otherwise - PC.

However, when our component hierarchy is 1 level deep, we don't have to do a lot of work. But what if our `Laptop` component got more complicated?

If, for instance, we wanted to allow admins to update mistyped information in our app, our `Laptop` component could get a little bit more nested.

```tsx
import React from "react";

const Laptop: React.FC<Computer> = ({ computer }) => (
  <div>
    <h3>
      <CPU>{computer.cpu}</CPU>
    </h3>
    <h4>
      <GPU>{computer.gpu}</GPU>
    </h4>
    <div>
      <span>{computer.modelName}</span>
      <span>{computer.brand}</span>
    </div>
    <LaptopScreenSize computer={computer} />
  </div>
);
```

If our `LaptopScreenSize` component did in fact get complicated, we might have to verify that the object we received indeed has a `screenSize` field.

## A better way

But I am here to present to you a better way. There is a very simple way in which we can ensure we always have exactly what we want, nothing more and nothing less.

We can leverage Typescript's powerful [Union Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types). In essence, union types allow us to make new types, that act as an `OR` clause in a way.

Let's start with a quick example. Say we have an intelligent logger that can both print single log messages, and multiple messages passed as a string array.

```javascript
function log(messages) {
  Array.isArray(messages)
    ? console.log(messages.join(" "))
    : console.log(messages);
}

log("hello"); // prints 'Hello'.
log(["Hello", "World"]); // prints 'Hello World'.
```

If we wanted to type it, we could do it naively like so:

```typescript
function log(messages: any) {
  Array.isArray(messages)
    ? console.log(messages.join(" "))
    : console.log(messages);
}

log("Hello"); // prints 'Hello'.
log(6); // this function will pass at compile time, but fail in runtime.
```

But that won't help us much, leaving us with pretty much untyped javascript. However, using union types we could type the function like this:

```typescript
function log(messages: string | string[]) {
  Array.isArray(messages)
    ? console.log(messages.join(" "))
    : console.log(messages);
}

log("Hello"); // prints 'Hello'.
log(["Hello", "World"]); // prints 'Hello World'
log(6); // Compile time error: Argument of type 'number' is not assignable to parameter of type 'string | string[]'.
```

Now that we know how to work with union types, we can use them to our advantage in our computer hardware store.

## One interface to rule them all? No!

Instead of using a single interface to describe both types of devices, we could split them up like so:

```typescript
type CPU = "Intel Core i9-10850K" | "AMD Ryzen 9 5950X";

type GPU = "Iris Plus Graphics 655" | "Nvidia GEFORCE RTX 3090";

enum DeviceType {
  PC = "PC",
  LAPTOP = "LAPTOP",
}

interface PC {
  cpu: CPU;
  gpu: GPU;
  brand: string;
  modelName: string;
  deviceType: DeviceType.PC;
}

interface Laptop extends PC {
  screenSize: number;
  deviceType: DeviceType.LAPTOP;
}

interface Computer = Laptop | PC;
```
