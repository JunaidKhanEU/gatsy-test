import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/blog.module.css"

const BlogPage = () => {
  return (
    <Layout>
      <div className={styles.blog}>
        <h1>Blog Page</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti sit
          id totam nemo. Nam nostrum quam explicabo? Perferendis iure laudantium
          magnam similique aliquam, delectus deleniti consequuntur illum at
          itaque placeat.
        </p>
      </div>
    </Layout>
  )
}

export default BlogPage
