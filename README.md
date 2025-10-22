🎯 Please mention the requirements you met and which goals you achieved for this assignment.

> App was deployed succesfully on vercel.

# Flow of fixes.

> Install npm modules
> Quick check through components and pages to spot any obvious problems.
>
> img used in CommentsList component (not correct for next)
> Change img to Image in comments list and import Image from next
>
> Next issue no db information or database used
>
> Created a Supabase set of table as listed in schema.sql
> Supabase changed UI, you now have drop downs to choose options when clicking connect
> Added details to .env.local
> CREATE TABLE votes, Error on last line, removed the , and it ran correctly
>
> Created own AUTH_SECRET…
> Followed guide on setting up Github Auth in dev settings
>
> Added environment variables to Vercel
>
> TODO: Why did the CALLBACK_URI give a fault initially.
> (Probs just waiting for vercel/github to update)…. After discussing with rest of class
>
> 🎯 Stretch Goals
>
> Added meta data function to posts ID, forgot about selecting the post by id initially…. Updated function to include select from db as postId.
>
> Working on error.js for voteing if not logged in.
> Error page working in local env but throwing an error in production.
