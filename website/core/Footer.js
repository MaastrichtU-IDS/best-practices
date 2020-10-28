/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('introduction')}>
              Get started
            </a>
            <a href={this.docUrl('project-management')}>
              Project management
            </a>
            <a href={this.docUrl('fair-data')}>
              FAIR data
            </a>
          </div>

          <div>
            <h5>Source</h5>
            <a href={this.props.config.repoUrl}
              target="_blank"
              aria-label="Star this project on GitHub">
              <img alt="GitHub stars" src="https://img.shields.io/github/stars/MaastrichtU-IDS/best-practices?label=best-practices&style=social"/>
            </a>
            <h5>Issues</h5>
            <a href="https://github.com/MaastrichtU-IDS/best-practices/issues"
              target="_blank" aria-label="GitHub issues">
              <img alt="GitHub issues" src="https://img.shields.io/github/issues/MaastrichtU-IDS/best-practices?label=best-practices"/>
            </a>
          </div>

          <div>
            <h5>Community</h5>
            <a href="https://twitter.com/um_ids"
              target="_blank" rel="noreferrer noopener" aria-label="Follow on Twitter">
              <img alt="Follow on Twitter"
              src="https://img.shields.io/twitter/follow/um_ids?style=social"/>
            </a>
            <a href="https://www.facebook.com/IDSatUM/"
              target="_blank" rel="noreferrer noopener">
              IDSatUM Facebook page
            </a>
            {/* <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a>
            <a
              href="https://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a> 
            <a
              href="https://twitter.com/um_ids"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )} */}
          </div>
        </section>

        {/* <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a> */}
        <section className="copyright">
          <div>
            <a rel="license" href="https://creativecommons.org/licenses/by/4.0/" title="Creative Commons Attribution 4.0 International license" target="_blank">
              <img src="/best-practices/img/cc-by.svg" alt="cc by license"/> 
            </a>
          </div>
          {this.props.config.copyright}
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
