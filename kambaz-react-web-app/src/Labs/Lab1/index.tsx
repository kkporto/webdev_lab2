 export default function Lab1() {
  return (
<div id="wd-your-favorite-recipe">

      <h2>Lab 1</h2>
      <h4>Student: Maria Clara Porto</h4>

      <h3>Header tag - h2 size</h3>
      {/* <div id="wd-h-tag"> ... </div> */}
      <div id="wd-p-tag">
        {/* <h4>Paragraph Tag</h4> */}
        {/* <p id="wd-p-1"> ... </p> */}
This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.

This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.

This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
      </div>

      {/* <h2>Lab 1</h2>
      <h3>HTML Examples</h3> */}
      {/* <div id="wd-h-tag"> ... </div> */}
      <div id="wd-p-tag">
        <h4>Paragraph Tag - h4 size</h4>
        {/* <p id="wd-p-1"> ... </p> */}
This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.

This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.

This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
      </div>


  <h2>List Tags</h2>
  <h3>Ordered List Tag</h3>
  How to make brigadeiro in its brazilian version:
  <ol id="wd-brigadeiro">
    <li>Get condensed milk, butter and cocoa powder in a pan under low heat.</li>
    <li>Mix ingredients constantly until consistency thickens.</li>
    <li>Once consistency has reached moldable point, turn off heat and keep mixing
       for a few minutes.</li>
    <li>Let it cool in the fridge for at least two hours.</li>
    <li>Spread a small amount of butter on your hands and roll the brigadeiro dough into balls.</li>
    <li>Roll the balls in sprinkles and enjoy!</li>
  </ol>

  <h3>Unordered List Tag</h3>
  Your favorite books (in no particular order)
  <ul id="wd-your-books">
    <li>The art thief</li>
    <li>Outsider</li>
    <li>Hunger games</li>
    <li>Game of thrones</li>
  </ul>


      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>3/10/26</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>3/17/26</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>HTML</td>
              <td>3/24/26</td>
              <td>98</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>HTML</td>
              <td>3/31/26</td>
              <td>93.7</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>JS</td>
              <td>4/6/26</td>
              <td>94.5</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>Architecture</td>
              <td>4/13/26</td>
              <td>89.7</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>HTML</td>
              <td>4/20/26</td>
              <td>98.2</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>HTML</td>
              <td>4/27/26</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>HTML</td>
              <td>5/4/26</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>HTML</td>
              <td>5/11/26</td>
              <td>99.3</td>
            </tr>


            <tr> ... </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>93.34</td>
            </tr>
          </tfoot>
        </table>
      </div>

      
  <h4>Image tag</h4>
  Loading an image from the internet: <br />
  <img id="wd-starship" width="400px"   src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" />
  <br />
  Loading a local image:
  <br />
  <img id="wd-teslabot" src="/public/images/teslabot.jpg" height="200px" />

<h4>Form Elements</h4>
  <form id="wd-text-fields">
    <h5>Text Fields</h5>
    <label htmlFor="wd-text-fields-username">Username:</label>
    <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
    <label htmlFor="wd-text-fields-password">Password:</label>
    <input type="password" value="123@#$asd" id="wd-text-fields-password" />
    <br />
    <label htmlFor="wd-text-fields-first-name">First name:</label>
    <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
    <label htmlFor="wd-text-fields-last-name">Last name:</label>
    <input type="text" placeholder="Doe"
           value="Wonderland"
           title="The last name"
           id="wd-text-fields-last-name" />
    {/* copy rest of form elements here  */}
  </form>


<h5>Text boxes</h5>
<label>Biography:</label><br/>
<textarea id="wd-textarea" cols={30} rows={10}>Suspendisse imperdiet magna a massa vulputate, in tempor enim ullamcorper. Duis dignissim velit condimentum ex pulvinar porta. Donec molestie, massa id consectetur dignissim, justo neque pellentesque augue, quis interdum dui nulla ut neque. In ut consequat ligula. Aenean imperdiet facilisis est. Vivamus et lacinia libero. Suspendisse at lorem in libero consectetur euismod ut quis orci.
</textarea>



<h5 id="wd-buttons">Buttons</h5>
<button type="button"
        onClick={() => alert("Life is Good!")}
        id="wd-all-good">
  Hello World!
</button>



<input type="radio"
       name="NAME1"
       value="OPTION1"/>
<input type="radio"
       name="NAME1"
       value="OPTION2" checked/>


<h5 id="wd-checkboxes">Checkboxes</h5>
<label>Favorite movie genre:</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
<label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
<label htmlFor="wd-chkbox-drama">Drama</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
<label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
<label htmlFor="wd-chkbox-fantasy">Fantasy</label>





<select>
   <option value="VAL1">Value 1</option>
   <option value="VAL2" selected>Value 2</option>
   <option value="VAL3">Value 3</option>
</select>


<select multiple>
   <option value="VAL1" selected>Value 1</option>
   <option value="VAL2">Value 2</option>
   <option value="VAL3" selected>Value 3</option>
</select>


<h4 id="wd-dropdowns">Dropdowns</h4>

<h5>Select one</h5>
<label  htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
<select id="wd-select-one-genre">
   <option value="COMEDY">Comedy</option>
   <option value="DRAMA">Drama</option>
   <option selected value="SCIFI">
       Science Fiction</option>
   <option value="FANTASY">Fantasy</option>


</select>

<h5>Select many</h5>
<label  htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
<select multiple id="wd-select-many-genre">
   <option value="COMEDY" selected> Comedy          </option>
   <option value="DRAMA">           Drama           </option>
   <option value="SCIFI"  selected> Science Fiction </option>
   <option value="FANTASY">         Fantasy         </option>
</select>


<h4>Other HTML field types</h4>

<label htmlFor="wd-text-fields-email"> Email: </label>
<input type="email"
       placeholder="jdoe@somewhere.com"
       id="wd-text-fields-email"/><br/>

<label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
<input type="number"
       value="100000"
       placeholder="1000"
       id="wd-text-fields-salary-start"/><br/>

<label htmlFor="wd-text-fields-rating"> Rating: </label>
<input type="range"
       value="4"
       max="5"
       placeholder="Doe"
       id="wd-text-fields-rating"/><br/>

<label htmlFor="wd-text-fields-dob"> Date of birth: </label>
<input type="date"
       value="2000-01-21"
       id="wd-text-fields-dob"/><br/>


  <h4>Anchor tag</h4>
  Please  
  <a href="https://github.com/kkporto/webdev_lab2" id="wd-lipsum"> click here </a>
    to acccess my git rep! <br/>


</div>
  );}





export function Lab1_3_8() {
  return (
  <div>
  <h4>Anchor tag</h4>
  Please  
  <a href="https://github.com/kkporto/webdev_lab2" id="wd-lipsum">click here</a>
    to get dummy text<br/>
  </div>
  );
}