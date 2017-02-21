import React from 'react'

const ReposList = (repos) => {
    const filtered = repos.map((repo, key) => {
      return (
        <div key={key} className="thumbnail">
          <div className="caption">
            <h3>{repo.name}
              <span className="badge">{repo.stargazers_count} STARS</span>
            </h3>
            <p>{repo.description}</p>
            <p>
              <a
                  href={repo.html_url}
                  className="btn btn-primary">Repository
              </a>
              <a
                  href={`${repo.html_url}/issues`}
                  className="btn btn-default">Issues ({repo.open_issues}) 
              </a>
            </p>
          </div>
        </div>
      )
    })

    return (filtered)
}

export default ReposList
