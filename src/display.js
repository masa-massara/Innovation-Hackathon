// display_map.js

import React from "react";
import { MultipleSelect } from "multiple-select";

const DisplayMap = () => {
  return (
    <div>
      <header className="header">
        <h1>ごみ箱まっぷ♡</h1>
        <a className="block button" href="./select_langage.html">
          select language
        </a>
      </header>

      <main className="main">
        <div id="Google_map">{/* Google Mapを表示 */}</div>

        <div className="select">
          <MultipleSelect
            options={[
              "燃えるゴミ",
              "燃えないゴミ",
              "ペットボトル",
              "カン",
              "ビン",
              "紙",
            ]}
            width={1000}
            formatSelectAll={() => "すべて"}
            formatAllSelected={() => "すべて選択されています"}
          />
        </div>
      </main>

      <footer className="footer">
        <h6>Team 梅ねり</h6>
      </footer>

      <style jsx>{`
        // css styles here
      `}</style>
    </div>
  );
};

export default DisplayMap;
