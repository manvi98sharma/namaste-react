const parent = React.createElement("div",{id:"parent"},
   [ React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"im h1"),
        React.createElement("h2",{},"im h2"),
        ]
    ),
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"im h1"),
        React.createElement("h2",{},"im h2"),
        ]
    )
]
);
// const heading = React.createElement("h1", {id: "heading"}, "Hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
