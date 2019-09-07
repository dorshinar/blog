---
title: Why I've Stopped Writing Snapshots Tests in Jest
subtitle: And Why I Think You Should Stop Too
date: "2019-06-18T20:00:00.000Z"
description: "I've stopped using them as I find no use maintaining useless tests. Enlighten me if you can!"
published: true
slug: /why-i-stopped-writing-jest-snapshot-tests
---

I'm developing a frontend application for quite a while now, and my team and I have a strict standard regarding unit testing our features - every new feature must be thoroughly tested with unit tests ([Jest](https://jestjs.io/) + [Enzyme](https://airbnb.io/enzyme/) for our client, which I'll be talking about in this article).

It took us a while to find the right path for us, all while learning how to use the tools we've chosen to the full extent, but through trial and error we've found a paradigm that works for us.

One of the first things you learn when reading `Jest`'s documentation is how to write [Snapshot Tests](https://jestjs.io/docs/en/snapshot-testing). They are meant to be the ultimate testing utility, and they interact beautifully with `React` components. You can "render" a component in your test under some condition, save it to a snapshot, and if in any future test the output of the component changes the test will fail and tell you that you've changed something you probably shouldn't have, and if you did it on purpose, you simply update the snapshot to reflect the new state of the component. For the purpose of this article I will explain the snapshot process briefly, but this is not an educational article - I strongly recommend the documentation of `Jest` for that.

In practice, it goes something like this - let's create a super simple component that look something like this:

<iframe src="https://codesandbox.io/embed/why-i-stopped-writing-jest-snapshot-tests-c5q50?fontsize=14" title="why-i-stopped-writing-jest-snapshot-tests" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

A simple test for it might be something along the lines of:

```js
import { mount, shallow } from "enzyme";
import { App } from "./app";
import React from "react";

describe("<App />", () => {
  it("matches snapshot with color blue", () => {
    const wrapper = shallow(<App color="blue" />);
    expect(wrapper).toMatchSnapshot();
  });
});
```

When we first run the test, it passes and creates a new snapshot. The snapshot looks like that:

```js
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`<App /> matches snapshot with color blue 1`] = `
<div
  className="outer"
>
  <div
    style={
      Object {
        "backgroundColor": "blue",
        "borderRadius": "50%",
        "height": "10px",
        "margin": "auto",
        "marginTop": "auto",
        "width": "10px",
      }
    }
  />
</div>
`;
```

Not too complicated as it is a super simple component I wrote in 2 minutes.

Let's say time passes and the component changes. It now looks like this:

<iframe src="https://codesandbox.io/embed/why-i-stopped-writing-jest-snapshot-tests-2-3rpk3?fontsize=14" title="why-i-stopped-writing-jest-snapshot-tests-2" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

My component obviously changed (I'm the one who changed it). Running the test now would result in a failed test, as the snapshots don't match, so I'm forced to update the snapshot to reflect the new state - basically forcing my test to pass.

Now that we have a basic understanding of snapshot testing I can make some bold claims as to why I have stopped using them entirely, and why I think you should too.

1. It's really hard to be specific as to what your test is actually testing. You can get away with that writing very small tests and have very descriptive names, but at that time I feel like a designated test for a specific use-case would be clearer, easier to maintain over changing demands and less fragile to irrelevant changes in your component.
2. Constant updating of snapshots can create an "if-it-doesn't-pass-just-update-it" attitude, especially when there are dozens of snapshots failing at once, and you/your teammate might be too lazy to actually task a closer look at each and every one of the failing tests, so updating them all becomes nearly automatic.
3. They provide no helpful information as to how the code is used, and how it should behave. They merely show what is rendered in a given situation, without any concrete assertions to help future you/new developers understand why or how the magic of your components happens.

This is my personal opinion on the subject, I'd love to hear different opinions about snapshot testing (not only in jest). Do you still write them? Have you found some enlightenment that I haven't? Please share!
