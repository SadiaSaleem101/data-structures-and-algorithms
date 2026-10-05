
function simplifyPath(path) {
  const stack = [];
  const parts = path.split("/");

  for (const part of parts) {
    if (part === "" || part === ".") {
      continue;
    }

    if (part === "..") {
      stack.pop();
    } else {
      stack.push(part);
    }
  }

  return "/" + stack.join("/");
}

console.log(simplifyPath("/home//user/../documents/"));
// "/home/documents"

console.log(simplifyPath("/a/./b/../../c/"));
// "/c"
