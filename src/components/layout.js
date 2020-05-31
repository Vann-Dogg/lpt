import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Seo from 'seo'
import Header from "./header"
import Nav from "./nav"
import "../styles/fonts.css"
import "../styles/global.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Seo title="Слушай. Молись. Размышляй." />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main id="content">{children}</main>
      <Nav />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
