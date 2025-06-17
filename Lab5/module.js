
const module = {
  id: 72009431234, name: "Module Megalodon",
  description: "Example module for Megalodon course",
  course: "MG5003",
};


export default function Module(app) {
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });

    app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  });

};
