import { graphql, useStaticQuery } from "gatsby"

export const useGuests = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            author
            title
            slug
            _nickname
          }
        }
      }
    }
  `)
  return data.allMdx.nodes.map(post => {
    return {
      title: post.frontmatter.title,
      author: post.frontmatter.author,
      slug: post.frontmatter.slug,
      excerpt: post.excerpt,
      nickname: post.frontmatter._nickname ?? null,
    }
  })
}
