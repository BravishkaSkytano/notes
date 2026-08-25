This is not a library of conclusions.It’s an index of things I’m still working out.

Ideas live here in draft form.  
Some are half-formed, some overgrown, some waiting patiently for their season.

I collect them, link them, revisit them, and let them change me over time.

I don’t believe clarity arrives all at once.  
It accumulates.  
Slowly.

Through attention, curiosity,  
And returning to the same thoughts with new eyes.

This garden favors process over polish,  
Learning over certainty,  
And growth over completion.

Nothing here is final. Everything is alive.

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

${some(query[[
  from j = index.pages(config.get("journal.tag"))
  where j.tag == "page"
  order by j.date desc
  limit 14
  select templates.pageItem(j)
]]) or "_No journal entries yet!_"}

# Recent incomplete tasks
${some(query[[
  from t = index.tasks()
  where not t.done
  order by t.pageLastModified
  desc limit 10
  select templates.taskItem(t)
]]) or "_All tasks done!_"}

# Recently modified pages
${query[[
  from p = index.contentPages()
  order by p.lastModified desc
  limit 10
  select templates.fullPageItem(p) 
]]}
