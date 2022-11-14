import React from 'react';
import clsx from 'clsx';
export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        {logo && <div className="margin-bottom--sm">{logo}</div>}
        {links}
        {copyright && (
          <div className="footer__bottom text--center">
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
