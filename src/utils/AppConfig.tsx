export const AppConfig = {
	site_name: 'Directorio Apps IA',
	title:'Directorio Apps IA',
	description: '+100 Apps con Inteligencia Artificial, herramientas IA necesarias que te ayudaran hacer todo más fácil',
	
};

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatearBlogPost(
  posts,
  { filterOutDraft = true, filterOutFuturePost = true,sortPostsByDate=true, limit = undefined } = {}
) {
const filteredPost = posts.reduce((acc,post)=>{
  const {pubDate,draft} = post.frontmatter;
  if(filterOutDraft && draft) return acc;
  if(filterOutFuturePost && new Date(pubDate) > new Date()) return acc;

  //agregar post a acc
  acc.push(post)
  return acc;

}, [])

//limite
if(typeof limit === "number"){
  return filteredPost.slice(0,limit);
}
return filteredPost.sort(()=>Math.random()-0.5);


}

 