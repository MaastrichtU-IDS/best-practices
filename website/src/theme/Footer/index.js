/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from 'react-router-dom'
import styles from './styles.module.css';

function FooterLink({to, href, label, prependBaseUrlToHref, ...props}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
    </Link>
  );
}

const FooterLogo = ({url, alt}) => (
  <img className="footer__logo" alt={alt} src={url} />
);

function Footer() {
  const {footer} = useThemeConfig();
  const location = useLocation();
  const {copyright, links = [], logo = {}} = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }

  const page_url = 'https://maastrichtu-ids.github.io' + location.pathname
  const feedback_url = "https://docs.google.com/forms/d/e/1FAIpQLSdvfnNT5Yi7XLoVjDcwTuEM45npNCcjwMrGD8oKSXJfSalVZQ/viewform?usp=pp_url&entry.1130493462=" + location.pathname + "&embedded=true"
  let displayState = "none";
  if(location.pathname.startsWith("/best-practices/docs/")){
    displayState = "block";
  }
  return (
    <>
      <iframe style={{display: displayState}} class="form"
      src={feedback_url}
      width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">
        Loading...
    </iframe> 
    <footer
      className={clsx('footer', {
        'footer--dark': footer.style === 'dark',
      })}>
      <div className="container">
        {links && links.length > 0 && (
          <div className="row footer__links">
            {links.map((linkItem, i) => (
              <div key={i} className="col footer__col">
                {linkItem.title != null ? (
                  <h4 className="footer__title">{linkItem.title}</h4>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul className="footer__items">
                    {linkItem.items.map((item, key) =>
                      item.html ? (
                        <li
                          key={key}
                          className="footer__item" // Developer provided the HTML, so assume it's safe.
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                        />
                      ) : (
                        <li key={item.href || item.to} className="footer__item">
                          <FooterLink {...item} />
                        </li>
                      ),
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
        {(logo || copyright) && (
          <div className="text--center">
            {/* {logo && logo.src && (
              <div className="margin-bottom--sm">
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLogoLink}>
                    <FooterLogo alt={logo.alt} url={logoUrl} />
                  </a>
                ) : (
                  <FooterLogo alt={logo.alt} url={logoUrl} />
                )}
              </div>
            )} */}

            <div>
              <a rel="license" href="https://creativecommons.org/licenses/by/4.0/" title="Creative Commons Attribution 4.0 International license" target="_blank">
                <img src="/best-practices/img/cc-by.svg" alt="cc by license"/> 
              </a>
            </div>

            <div style={{marginBottom: '10px'}} // Developer provided the HTML, so assume it's safe.
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: copyright,
              }}
            />

            {/* <div style={{marginBottom: '10px', color: 'grey'}}>
              We track page views and users demographics using Google Analytics to improve our users experience. <a href="https://policies.google.com/technologies/partner-sites">See how Google uses collected information</a>.<br/>
              You can prevent Google Analytics tracking by enabling <a href="https://blog.mozilla.org/blog/2019/06/04/firefox-now-available-with-enhanced-tracking-protection-by-default/">Firefox Tracking Protection</a>, installing <a href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=fr">uBlock Origin add-on</a>, or using the official <a href='https://tools.google.com/dlpage/gaoptout/'>Google Analytics Opt-out add-on</a>.
            </div> */}
          </div>
        )}
      </div>
    </footer>
    </>
  );
}

export default Footer;
