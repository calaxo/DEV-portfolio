const modules = import.meta.glob('./pages/*.jsx',{import : 'name'});

console.log(modules);

Object.entries(modules).forEach(([path, module]) => {
  module().then((name) => {
    console.log(name.default);
  });
});