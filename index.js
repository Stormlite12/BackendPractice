require('dotenv').config()
const express = require('express')


const app = express()
const port =4000

const githubData= {
    "login": "Stormlite12",
    "id": 68964321,
    "node_id": "MDQ6VXNlcjY4OTY0MzIx",
    "avatar_url": "https://avatars.githubusercontent.com/u/68964321?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Stormlite12",
    "html_url": "https://github.com/Stormlite12",
    "followers_url": "https://api.github.com/users/Stormlite12/followers",
    "following_url": "https://api.github.com/users/Stormlite12/following{/other_user}",
    "gists_url": "https://api.github.com/users/Stormlite12/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Stormlite12/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Stormlite12/subscriptions",
    "organizations_url": "https://api.github.com/users/Stormlite12/orgs",
    "repos_url": "https://api.github.com/users/Stormlite12/repos",
    "events_url": "https://api.github.com/users/Stormlite12/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Stormlite12/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Siddartha Datta",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2020-07-29T16:50:08Z",
    "updated_at": "2024-10-30T14:14:52Z"
  }

app.get('/github', (req,res) =>{
    res.json(githubData)
})

app.get('/',(req,res) =>{
    res.send('Hello World!')
})

app.get('/backrooms', (req,res) =>{
    res.send('Welcome to the backrooms')
})

app.get('/login', (req,res) =>{
    res.send('<h1>Please login <h1/>')
})

app.get('/linkedin', (req,res)=>{
    res.send('www.linked.com')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})
