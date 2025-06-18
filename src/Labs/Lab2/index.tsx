import "./index.css";

import Float from "./Float.tsx";
import Padding from "./Padding.tsx";
import Borders from "./Borders.tsx";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Margins from "./Margins"; 
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import { Positions, AbsolutePositions, FixedPositions } from "./Positions.tsx";
import Zindex from "./Zindex.tsx";
import { GridLayout } from "./GridLayout.tsx";
import Flex from "./Flex.tsx";


import ReactIconsSampler from "./ReactIcons.tsx";
import { Container } from "react-bootstrap";
import BootstrapGrids from "./BootstrapGrids.tsx";
import ScreenSizeLabel from "./ScreenSizeLabel.tsx";
import { BootstrapTables, BootstrapTablesResponsive } from "./BootstrapTables.tsx";
import { BootstrapLists, BootstrapListHyperlink } from "./BootstrapLists.tsx";
import { BootstrapForms, BootstrapFormsSwitches, BootstrapFormsAddons,
  BootstrapFormsRange, BootstrapFormsResponsive, BootstrapFormsResponsiveRadios
 } from "./BootstrapForms.tsx";

import { BootstrapNavigation, BootstrapCards } from "./BootstrapNavigation.tsx";


function Lab2_Basic(){
  return(
    <Container> 
    <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      …
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
Instead of changing the look and feel of all the 
elements of the same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
Here's another paragraph using a different ID and a different look and
          feel
        </p>
      </div>
      <div id="wd-css-class-selectors">
  <h3>Class selectors</h3>

  <p className="wd-class-selector">
Instead of using IDs to refer to elements, you can use an element's CLASS attribute
  </p>

  <h4 className="wd-class-selector">
This heading has same style as paragraph above
  </h4>

  </div>
  <div id="wd-css-document-structure">
    <div className="wd-selector-1">
      <h3>Document structure selectors</h3>
      <div className="wd-selector-2">
        Selectors can be combined to refer elements in particular
        places in the document
        <p className="wd-selector-3">
          This paragraph's red background is referenced as
          <br />
          .selector-2 .selector3<br />
          meaning the descendant of some ancestor.<br />
          <span className="wd-selector-4">
            Whereas this span is a direct child of its parent
          </span><br />
            You can combine these relationships to create specific 
            styles depending on the document structure
        </p>
      </div>
    </div>
  </div>
</Container>

  );
}



export default function Lab2() {
  return (
    // <div id="wd-lab2">
  <Container> 

    <Lab2_Basic/>

    <ForegroundColors />
    <BackgroundColors />
    <Borders />
    <Padding />
    <Margins />
    <Corners />
    <Dimensions />
    <Positions />
    <AbsolutePositions />
    <FixedPositions />
    <Zindex />
    <Float />
    <GridLayout />
    <Flex />
    
    <ReactIconsSampler />
    <BootstrapGrids />
    <ScreenSizeLabel />

    <BootstrapTables />
    <BootstrapTablesResponsive />

    <BootstrapLists />
    <BootstrapListHyperlink />
    <BootstrapForms />
    <BootstrapFormsSwitches />
    <BootstrapFormsAddons />
    <BootstrapFormsRange />
    <BootstrapFormsResponsive />
    <BootstrapFormsResponsiveRadios />

    <BootstrapNavigation />
    <BootstrapCards />

</Container>





    );}