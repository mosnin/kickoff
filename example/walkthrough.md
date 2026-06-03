# The Ritual, performed — a worked example

> Don't trust the Ritual because the README says it works. Watch it work. This is
> one real brief, run end to end, with the seams left showing so you can see the
> methods *change the decision* — not just the tone.

**The brief:** *"Add a way for users to share their work."*

A blank-slate assistant ships this in an afternoon. Here's that version, then the
version the Ritual produces — and the gap between them is the entire pitch.

---

## Without the Ritual

> Add a **Share** button to the toolbar. On click, generate a public URL and copy
> it to the clipboard. Show a toast: "Link copied." Ship it.

It works. It demos fine. It is also forgettable, slightly scary to use, and does
nothing for the business. It's a *feature*. Now watch the Ritual turn the same
brief into a *product decision.*

---

## With the Ritual

### 1 · Frame — is this worth doing? *(vision + the human)*

**Vision** reframes the brief: *"Share" is not a button. It's the moment a person
is proud enough of what they made to put their name on it in front of someone
else.* That moment is rare and valuable — design *that*, not a URL generator.

**The human** asks who's really sharing and to whom: a user sending work to a
teammate or a friend, often unsure who'll be able to see it or change it. The real
goal isn't "produce a link" — it's *"let someone else see my work without me
feeling exposed."*

→ **Reframed problem:** *Make people feel proud and safe handing their work to
someone else.* Already a different product than "Share button."

### 2 · Design — the smallest revolutionary slice *(the human + vision)*

**The human** walks the task and maps the friction:

| Step | Friction | Fix |
|---|---|---|
| Click share | "Who will be able to see this?" — anxiety | State access in plain words *before* the link exists |
| Get a raw public URL | Fear: anyone with it has it forever | Default to *people you name*, not *anyone with the link* |
| Send it | "Did it work? Can they edit?" | Show recipient + permission, with one-click change |
| Recipient opens | Cold, contextless | Open to the work with the sharer's name and intent |

**Vision** cuts: one primitive — *share with a person, at a permission level* — not
five (link, embed, export, invite, publish). The smallest *whole, great* thing: a
share sheet that says, in a sentence, *"Maya can view this"* and means it.

### 3 · Engineer — at the limit *(the engineer)*

First-principles teardown: the visible artifact is a link, but the *real
constraint* is **access control** — who can do what, enforced server-side, every
request. Get that right and the link, the embed, the export are all trivial views
on the same primitive. Get it wrong and every sharing feature is a new security
hole.

→ Delete the "public link" special case. Build *one* authorization primitive
(subject → resource → capability). The share UI is a thin skin over it. Fewer
parts, one place for security to be correct.

### 4 · Productize — make it repeatable *(the producer)*

One sharing primitive, reused everywhere, beats five bespoke flows. Define the
standard: every shareable object goes through the same access-control path, the
same share sheet, the same audit log. New shareable thing later? It inherits
sharing for free — no new code, no new way to get security wrong. Quality built
into the line, not re-inspected per feature.

### 5 · Monetize — make it pay *(the banker)*

Here's the move a feature-shipper never sees: **every shared piece of work is a
free, warm invitation to a non-user.** The recipient opens the product to
something a person they know made and was proud of — the best possible first
impression. Sharing *is* the growth loop. So:

- Make the shared view beautiful and the "make your own" path one tap — the
  acquisition surface, not an afterthought.
- Capture value patiently: sharing stays free (it's the engine); depth for the
  *sharer* (private spaces, advanced permissions, team controls) is where revenue
  lives. Never tax the invitation — that's burning the flywheel for a one-time
  coin. *(The human method confirms: no dark patterns, no forced friction.)*

### 6 · Run the gates — synthesize to one decision

```
DESIRABLE    ✅  A proud, safe "here's my work" moment — not a scary URL.   (vision · human)
FEASIBLE     ✅  One access-control primitive; everything else is a view.    (engineer)
DELIVERABLE  ✅  Same sharing path for every object, forever.                (producer)
VIABLE       ✅  Each share acquires the next user; depth is monetized.      (banker)
```

All four clear. Vision had no tie to break — the methods converged. **Ship it.**

### 7 · Record — the decision, remembered

> **ADR 0003 — Sharing is an access-control primitive, not a link feature**
> *Context:* brief was "add sharing." *Synthesis:* reframed to a proud/safe
> handoff; engineer identified access control as the true constraint; producer
> standardized one path; banker identified shared work as the growth loop.
> *Decision:* build a single authorization primitive; share UI is a thin view;
> sharing stays free, depth is paid. *Consequences:* every future shareable object
> inherits sharing + security; growth and product are now the same surface.

---

## The gap

| | Without the Ritual | With the Ritual |
|---|---|---|
| **What shipped** | A "Share" button + public link | A proud, safe sharing *experience* |
| **Security** | A new public-link code path | One audited access-control primitive |
| **Future features** | Each sharing case re-built | Inherit sharing for free |
| **Business** | Neutral | The product's growth loop |
| **In one word** | Feature | Product |

Same brief. Same afternoon, roughly. **Wildly different product** — because five
disciplines each changed the decision, and the gates fused them into one.

That's the Ritual. Not a costume. A way of reaching the better answer, every
time.
