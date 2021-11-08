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
            _role
          }
        }
      }
    }
  `)
  const guests = data.allMdx.nodes
    .map(post => {
      return {
        title: post.frontmatter.title,
        author: post.frontmatter.author,
        slug: post.frontmatter.slug,
        excerpt: post.excerpt,
        nickname: post.frontmatter._nickname ?? null,
        role: post.frontmatter._role ?? null,
      }
    })
    .filter(p => p.role === "guest")
  guests.sort((g1, g2) => {
    return ((g1.nickname ?? "") as string).localeCompare(g2, "th")
  })
  return guests
}
