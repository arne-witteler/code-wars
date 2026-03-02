var greet = function(name) {
  
  const fixedName = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
  
  return "Hello " + fixedName + "!";
};
​