<div align="center">
<img src="./img/Flexboard_icon.png" height=300 width=300 alt="Flexboard Logo">
<h1>Flexboard</h1>
</div>

<!-- Repository stats -->

<div align="center">

<img alt="GitHub" src="https://img.shields.io/github/license/dorbus/flexboard?style=plastic">

<img alt="GitHub release (latest by date including pre-releases" src="https://img.shields.io/github/v/release/dorbus/flexboard?include_prereleases">

<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dorbus/flexboard?style=plastic">

<img alt="GitHub Repo forks" src="https://img.shields.io/github/forks/dorbus/flexboard?style=plastic">

<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/dorbus/flexboard?style=plastic">

<img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/dorbus/flexboard/react?style=plastic">

<img alt="GitHub Repo stars" src="https://img.shields.io/github/contributors-anon/dorbus/flexboard">

<img alt="Github Repo Sponsors" src="https://img.shields.io/github/sponsors/dorbus?style=plastic)">

<h4>React component library for re-sizable sidebars</h4>

</div>

<!-- Demo -->

## Demo

![react-pro-sidebar](./img/flexboard-demo.gif)

<!-- Installation -->

## Installation

### yarn

```bash
yarn add @dorbus/flexboard
```

### npm

```bash
npm install @dorbus/flexboard
```

<!-- Usage -->

## Usage

Import `FlexboardProvider`, `FlexboardFrame` and `Flexboard` and wrap `Flexboard` and `FlexboardFrame` inside `FlexboardProvider` as shown below:

```tsx
import { Flexboard, FlexboardProvider, FlexboardFrame, ResizerType, Position } from '@dorbus/flexboard';
<FlexboardProvider>
        <Flexboard
          direction={Position.left}
          draggable={true}
          width={400}
          minWidth={200}
          maxWidth={600}
          flexboardStyle={{ backgroundColor: "#f2f3f4" }}
          resizerStyle={{ backgroundColor: "pink" }}
          resizerType={ResizerType.gutterlane}
        >
          <div>Flexboard Content</div>
        </Flexboard>
        <FlexboardFrame>
          <div>Frame Content</div>
        </FlexboardFrame>
      </FlexboardProvider>
```

<!-- API -->

## API

<table>
    <thead>
        <tr>
            <th>Component</th>
            <th>Prop</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=10>Flexboard</td>
            <td >direction</td>
            <td><code>Position</code></td>
            <td>Flexboard position</td>
            <td><code>left</code></td>
        </tr>
        <tr>
            <td>draggable</td>
            <td><code>boolean</code></td>
            <td>Flexboard is resizable or not</td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td>width</td>
            <td><code>number</code></td>
            <td>Initial width of flexboard</td>
            <td><code>200px</code></td>
        </tr>
        <tr>
            <td>minWidth</td>
            <td><code>number</code></td>
            <td>Minimum width of draggable flexboard</td>
            <td><code>150</code></td>
        </tr>
        <tr>
            <td>maxWidth</td>
            <td><code>number</code></td>
            <td>Maximum width of draggable flexboard</td>
            <td><code>300</code></td>
        </tr>
        <tr>
            <td>flexboardStyle</td>
            <td><code>CSS</code></td>
            <td>Pass custom sidebar styles</td>
            <td>-</td>
        </tr>
        <tr>
            <td>resizerStyle</td>
            <td><code>CSS</code></td>
            <td>Pass custom resizer styles</td>
            <td>-</td>
        </tr>
        <tr>
            <td>resizerType</td>
            <td><code>ResizerTypes</code></td>
            <td>Choose a resizer type: <ul><li><code>line</code></li><li><code>shadowline</code></li><li><code>lane</code></li><li><code>gutterlane</code></li></ul></td>
            <td><code>line</code></td>
        </tr>
    </tbody>
</table>

## Project Created & Maintained By

### Divyanshu Shekhar

<a href="https://twitter.com/dshekhar17"><img src="https://github.com/aritraroy/social-icons/blob/master/twitter-icon.png?raw=true" width="60"></a> <a href="https://in.linkedin.com/in/divyanshu-shekhar-a8a04a162"><img src="https://github.com/aritraroy/social-icons/blob/master/linkedin-icon.png?raw=true" width="60"></a> <a href="https://instagram.com/dshekhar17"><img src="https://github.com/aritraroy/social-icons/blob/master/instagram-icon.png?raw=true" width="60"></a>

[![GitHub followers](https://img.shields.io/github/followers/divshekhar.svg?style=social&label=Follow)](https://github.com/divshekhar/)

### Aniket Pathak

<a href="https://www.linkedin.com/in/aniket-pathak-8925311b5/"><img src="https://github.com/aritraroy/social-icons/blob/master/linkedin-icon.png?raw=true" width="60"></a> <a href="https://www.instagram.com/anik3t_pathak/"><img src="https://github.com/aritraroy/social-icons/blob/master/instagram-icon.png?raw=true" width="60"></a>

[![GitHub followers](https://img.shields.io/github/followers/aniketpathak028.svg?style=social&label=Follow)](https://github.com/aniketpathak028/)

## Stargazers

[![Stargazers repo roster for @dorbus/flexboard](https://reporoster.com/stars/dorbus/flexboard)](https://github.com/dorbus/flexboard/stargazers)

## Forkers

[![Forkers repo roster for @dorbus/flexboard](https://reporoster.com/forks/dark/dorbus/flexboard)](https://github.com/dorbus/flexboard/network/members)

<!-- License -->

## License

[ISC](LICENSE) © 2022 Dorbus.
