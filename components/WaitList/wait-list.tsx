import React, { FC } from 'react';
import Script from 'next/script';

export const WaitList: FC = () => {
  return (
    <div className="mt-10">
      <div id="getWaitlistContainer" data-waitlist_id="15316" data-widget_type="WIDGET_1"></div>
      <Script
        src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
        strategy="afterInteractive"
      />
    </div>
  );
};
