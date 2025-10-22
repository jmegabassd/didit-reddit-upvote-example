🎯 Please mention the requirements you met and which goals you achieved for this assignment.

> App was deployed succesfully on vercel.
> Finished Meta description stretch goal.

# Flow of fixes.

> Install npm modules
>
> Quick check through components and pages to spot any obvious problems. (keeping an eye out for any Linter in red)
>
> img used in CommentsList component (not correct for next)
> Changed <img/> to <Image/> in comments list and import Image from next
>
> Next issue no db information or database setup
>
> Created a Supabase set of tables as listed in schema.sql
> Note: Supabase changed UI again!, you now have drop downs to choose options when clicking connect
> CREATE TABLE votes, Error on last line, removed the , and it ran correctly
> Created own AUTH_SECRET…
> Followed guide on setting up Github Auth in dev settings
> Added AUTH_SECRET, AUTH_GITHUB_ID, AUTH_GITHUB_SECRET, DATABASE_URL to .env.local
> Added environment variables to Vercel
>
> CALLBACK_URI Fault
> TODO: Why did the CALLBACK_URI give a fault initially?
> (Probs just waiting for vercel/github to update)…. After discussing with rest of class
>
> 🎯 Stretch Goals
>
> Added meta data function to posts ID, forgot about selecting the post by id initially…. Updated function to include select from db as postId.
>
> Working on error.js for voting if not logged in.
> As part of being able to use the login button already in place split the LoginButton to a server and a client function.
> Error page working in local env but throwing an error in production - In progress finding a fix
