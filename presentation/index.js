// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  CodePane,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Nock
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            mock all your http dependencies
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Low Level
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Overrides <code>http.request</code> function
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Library Agnostic
          </Heading>

          <List>
            <ListItem textColor="primary">request</ListItem>
            <ListItem>superagent</ListItem>
            <ListItem textColor="primary">node-fetch</ListItem>
            <ListItem>got</ListItem>
            <ListItem textColor="primary">...</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Benefits
          </Heading>
          <List>
            <ListItem>Some libraries are hard to mock</ListItem>
            <ListItem>Interceptors removed once used</ListItem>
            <ListItem>Library agnostic</ListItem>
            <ListItem>Rely on service endpoints not internals</ListItem>
            <ListItem>Awesome one page documentation</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Awesome commit messages
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            "Add http mock with nock"
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            "Use nock to mock..."
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            "Fixed nock mock"
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Interceptor
          </Heading>
          <CodePane lang="javascript"
            textSize="2rem"
            source={require("raw-loader!../code/interceptor.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Interceptor
          </Heading>
          <List>
            <ListItem>Interceptor is removed once used</ListItem>
            <ListItem>Two Interceptors for subsequent calls</ListItem>
            <ListItem>Multiple calls: <code>.times(4)</code></ListItem>
            <ListItem>Always same reply <code>.persist(4)</code></ListItem>
            <ListItem><code>scope.done()</code></ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Example
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            passport-bitbucket-oauth20
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Problem
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            passport-bitbucket-oauth20
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            passport-oauth2
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            oauth2
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Problem
          </Heading>
          <CodePane textSize="2rem" lang="javascript" source="strategy._oauth2.get = mockFunction"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Problem
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold fit>
            Mock dependency of dependency
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold fit>
            Mock "private" function
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold fit>
            Does not test "whole stack"
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Problem
          </Heading>
          <CodePane textSize="1.25rem" lang="javascript" source={require("raw-loader!../code/no-nock.example")} />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Let's solve this
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            nock
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            There is more...
          </Heading>
          <List bold fit textColor="tertiary">
            <ListItem>HTTP Verbs: get, post, put or delete,...</ListItem>
            <ListItem>Query strings</ListItem>
            <ListItem>Replies from file</ListItem>
            <ListItem>Delay response/connection</ListItem>
            <ListItem>Filtering</ListItem>
            <ListItem>Expectations</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
