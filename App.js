const heading = React.createElement("h1", {className: 'heading'}, 'NamasteEveryone');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

const heading2 = React.createElement("h2", {id:'secondHeading'}, 'Second Heading');
const heading3 = React.createElement("h3", {id: 'thirdHeading'}, 'Third Heading');

const root2 = ReactDOM.createRoot(document.getElementById('root2'));

root2.render([heading2,heading3]);