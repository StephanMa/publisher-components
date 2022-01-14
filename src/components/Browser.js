import React from "react";

const Browser = (props) => {
  return (
    <pb-page
      endpoint="https://teipublisher.com/exist/apps/tei-publisher"
      emit="kant"
      class="embedded"
    >
      <pb-document
        id="kant"
        path="test/kant_rvernunft_1781.TEI-P5.xml"
        odd="dta"
      ></pb-document>
      <pb-navigation
        direction="forward"
        keyboard="right"
        emit="kant"
        subscribe="kant"
      >
        <h1>hey you</h1>
        <paper-fab icon="icons:chevron-right"></paper-fab>
      </pb-navigation>
      <pb-navigation
        direction="backward"
        keyboard="left"
        emit="kant"
        subscribe="kant"
      >
        <paper-fab icon="icons:chevron-left"></paper-fab>
      </pb-navigation>
      <pb-view
        src="kant"
        xpath="//teiHeader/fileDesc/titleStmt/title"
        emit="kant"
        subscribe="kant"
      >
        <pb-param name="header" value="short"></pb-param>
      </pb-view>
      <pb-view
        class="transcription"
        src="kant"
        view="page"
        emit="kant"
        subscribe="kant"
        append-footnotes=""
        animation=""
      ></pb-view>
    </pb-page>
  );
};

export default Browser;
