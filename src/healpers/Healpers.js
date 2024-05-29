export const generatePageTitle = (path) => {
// Example logic: Convert route to title
const title = path.replace(/-/g, "").replace(/\//g, "")
return title;
}