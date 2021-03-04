import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    // props.htmlAttributes contains lang prop
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap"
          />
        </noscript>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              window.__onThemeChange = function() {};
              function setTheme(newTheme) {
                window.__theme = newTheme;
                preferredTheme = newTheme;
                document.body.className = newTheme;
                window.__onThemeChange(newTheme);
              }

              var preferredTheme;
              try {
                preferredTheme = localStorage.getItem('theme');
              } catch (err) { }

              window.__setPreferredTheme = function(newTheme) {
                setTheme(newTheme);
                
                try {
                  localStorage.setItem('theme', newTheme);
                } catch (err) {}
              }

              var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
              darkQuery.addListener(function(e) {
                window.__setPreferredTheme(e.matches ? 'dark' : 'light')
              });

              setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
            })();
            `,
          }}
        />
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
