/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `<a href="https://github.com/MaastrichtU-IDS/best-practices/issues"
      target="_blank" aria-label="Issues best-practices on GitHub">
      <img alt="GitHub best-practices" src="https://img.shields.io/github/issues/MaastrichtU-IDS/best-practices?label=best-practices"/>
    </a><br/>
    <p>Browse and submit [issues](https://github.com/MaastrichtU-IDS/best-practices/issues) or [pull requests](https://github.com/MaastrichtU-IDS/best-practices/pulls) 
    for bugs you find or any new features you would like to see implemented 🔧</p>`,
      title: 'Submit issues',
    },
    {
      content: `Feel free to [contact the main maintainers](mailto:vincent.emonet@maastrichtuniversity.nl) if you have any questions 📬`,
      title: 'Contact us',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>This project is maintained by a dedicated group of people.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
