![](img/logo.png)

This is not a library of conclusions.
It’s an index of things I’m still working out.

Ideas live here in draft form.
Some are half-formed,
Some overgrown,
Some waiting patiently for their season.

I collect them,
Link them,
Revisit them,
And let them change me over time.

I don’t believe clarity arrives all at once.
It accumulates.
Slowly.

Through attention,
Curiosity,
And returning to the same thoughts with new eyes.

This garden favors process over polish,
Learning over certainty,
And growth over completion.

Nothing here is final.
Everything is alive.

In progress, on purpose.

# Recent quick notes
${widgets.commandButton("Create quick note", "Quick Note")}

${some(query[[
  from p = index.subPages("Inbox")
  order by p.lastModified desc
  limit 10 select templates.fullPageItem(p)
]]) or "_No quick notes yet!_"}

# Recent journal entries
${widgets.commandButton("Today's entry", "Journal: Today")}

<!--#lua some(query[[
  from j = index.pages(config.get("journal.tag"))
  where j.tag == "page"
  order by j.date desc
  limit 14
  select templates.pageItem(j)
]]) or "_No journal entries yet!_" -->
* [[Journal/2026-08-25]]
* [[Journal/2026-08-12]]
* [[Journal/2026-08-11]]
<!--/lua-->

# Recent incomplete tasks
<!--#lua some(query[[
  from t = index.tasks()
  where not t.done
  order by t.pageLastModified
  desc limit 10
  select templates.taskItem(t)
]]) or "_All tasks done!_" -->
* [ ] [[Library/themes/zen@27241]] Unchecked task
* [ ] [[Library/themes/zen@35095]] Update admonition style
* [ ] [[Journal/2026-08-25@39]] Look into [Media Gallery](https://community.silverbullet.md/t/simple-media-gallery-for-books-movie-tv-series-games-etc/3795?u=mr.red)
* [ ] [[z-templates/assignments@122]] Assignment 1
* [ ] [[z-templates/assignments@143]] Assignment 2
* [ ] [[z-templates/assignments@164]] Exam
* [ ] [[z-templates/daily@169]]
* [ ] [[z-templates/daily@175]]
* [ ] [[z-templates/assignments@177]] Final Project
* [ ] [[z-templates/daily@181]]
<!--/lua-->

# Recently modified pages
<!--#lua query[[
  from p = index.contentPages()
  order by p.lastModified desc
  limit 10
  select templates.fullPageItem(p) 
]] -->
* [[Hellenistic Period|Hellenistic Period]]
* [[Career Goals Essay|Career Goals Essay]]
* [[Classical|Classical]]
* [[Journal/2026-08-25|Journal/2026-08-25]]
* [[index|index]]
* [[Journal/2026-08-11|Journal/2026-08-11]]
* [[Journal/2026-08-12|Journal/2026-08-12]]
* [[z-archive/journal 1/2024/03-march/2026-03-24|z-archive/journal 1/2024/03-march/2026-03-24]]
* [[z-archive/seeds 1/humanism|z-archive/seeds 1/humanism]]
* [[z-archive/seeds 1/iconoclasm|z-archive/seeds 1/iconoclasm]]
<!--/lua-->
