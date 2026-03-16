---
title: "AI Prototyping Is Changing UX Faster Than Our Process Is Ready For"
date: "2026-03-13"
excerpt: "AI prototyping speeds up design dramatically, but when early prototypes look real, feedback can shift from exploratory to critiquing the interface."
category: "Design Strategy"
---

AI prototyping speeds up design dramatically, but when early prototypes look real, feedback can shift from exploratory to critiquing the interface.

## TL;DR

AI prototyping lets designers build realistic, interactive prototypes much faster, but when something looks real, stakeholders treat it as real. That can shift feedback toward surface-level critique instead of deeper conversations about problems, systems, and user needs. The challenge for UX is not just using AI tools, but making sure speed does not push teams past the thinking stages that make good products possible.

---

## Changing the pace of the work

I recently tried an AI-assisted prototyping workflow on a large portal project, and it completely changed the pace of the work. I typically move incrementally through the work. Maybe a directory pattern, then a news card pattern, then navigation structures. Each piece is reviewed and refined before the next one appears. The product requirements are usually already defined in a PRD, but the design work is compartmentalized so we can get focused feedback on each piece before moving forward.

This time, I took a different path.

I started with a very basic wireframe structure in Figma and then moved it into Figma Make to generate a working interface. From there I brought it into Google’s Antigravity environment to iterate directly in code, and deployed the prototype through Vercel so it could be shared and explored. Within about two weeks I had a fully clickable portal running online. Pages connected, navigation worked, and interactions were present in a way that felt surprisingly close to a real product.

## UX process for AI prototyping

![AI Prototyping Process](/ai-prototyping-process.png)

Stakeholders could explore the system as if it were already built. And while that speed was exciting, it also surfaced something that I think UX teams need to start talking about. AI prototyping may be accelerating us past parts of the design process that still matter.

### The acceleration is real

![How to draw an owl](/draw-owl.png)

There is no denying the productivity shift. AI tools make it possible to move from rough structure to interactive prototype dramatically faster than traditional design workflows. What used to unfold gradually can now appear almost instantly (with a [good prompt](https://uxdesign.cc/figma-make-prompts-with-real-examples-2ece15d0fce6), that is). Instead of presenting fragments of a system, why not just present the entire thing?

This time around, stakeholders weren’t reacting to isolated components or page templates. They were navigating a full environment. From a communication standpoint, that clarity is powerful. People understand systems better when they can experience them.

## When a prototype looks real, it gets treated as real

I noticed how quickly the prototype changed the nature of feedback.

When something is clickable and polished, people naturally assume it is close to finished. Even when you explain that it is exploratory, the visual and interactive fidelity signals ‘This is a finished product.’

I noticed that stakeholders begin responding to it as an object rather than as an idea.

## The risk of skipping the system conversation

Another consequence of AI-assisted prototyping is that it can compress or obscure an important phase of design-system thinking.

In most design workflows, reusable patterns become visible through repeated design work. Teams design real screens, notice recurring solutions, and gradually abstract those solutions into reusable components. A card pattern appears across a few pages. A list layout stabilizes. Navigation patterns repeat. Over time, those patterns are formalized into components and documented in a system. In this way, the system emerges through iteration and shared understanding rather than appearing fully formed, a process often described in discussions of [how design systems evolve through real product work](https://bradfrost.com/blog/post/master-design-system-governance-with-this-one-weird-trick/).

Design-system thinking is often framed as an interplay between small building blocks and complete interfaces. One widely used model describes systems as layers that move between foundational UI elements and full screens, showing how interfaces are composed from reusable parts as patterns stabilize over time in practice.

Research and practice guides on design systems also emphasize that systems tend to form through repeated use, refinement, and shared understanding across teams rather than appearing fully designed at the outset.

AI-assisted prototyping can invert that rhythm. When a model generates a polished interface in seconds, the experience of the system shifts from watching patterns emerge to reacting to a finished environment. Stakeholders see a fully assembled product before the foundational discussions about hierarchy, reuse, and constraints have taken place.

This subtle shift changes how design conversations happen. Instead of starting with components and patterns, teams often begin by evaluating the generated interface as a whole. The discussion moves toward surface adjustments rather than structural questions. The system still exists, but it is hidden beneath the generated output, making it harder to talk about the rules and primitives that actually govern the interface.

## Feedback becomes harder to structure

There was also a practical challenge. When we gather feedback on design work, tools like Figma provide a shared environment for commenting, annotation, and discussion. Feedback attaches directly to frames and components. There are also specialized review tools, like [Pastel](https://pastel.app/), that let teams comment directly on live websites and prototypes. But those kinds of tools are not always available to every team, especially when they come with enterprise pricing or require additional procurement. In many environments, teams still rely on the tools they already have access to. A coded prototype does not always offer the same built-in structure for feedback, so in this case I had to create a separate feedback form just to collect reactions. The prototype was easy to explore, but harder to discuss collaboratively.

That small shift highlighted something important. Our feedback processes are deeply tied to our design tools. When the artifact changes, the process needs to evolve with it.

## The design lifecycle might be changing

Most designers are familiar with the common stages of design thinking:

1.  Empathize
2.  Define
3.  Ideate
4.  Prototype
5.  Test

AI-assisted workflows blur the boundaries between several of these steps. When a prototype can be generated quickly from a loose structure, the transition from ideation to prototyping collapses. Designers can move directly from rough thinking to interactive artifacts. On the surface, that seems like pure efficiency. But it also introduces a new challenge in that prototypes can now appear before teams have aligned on the problem, the system, or the structure. And once a prototype exists, the conversation naturally gravitates toward it.

## Designers may need to protect earlier stages

The more I experiment with these tools, the more I believe designers may need to become more intentional about protecting earlier stages of the process. Just because we can generate a working interface quickly does not mean we should let that interface lead the conversation.

Sometimes the work still needs to stay messy and stakeholders need to react to concepts instead of (perceived) artifacts.

Sometimes the system needs to be discussed before the interface appears. AI prototyping is incredibly powerful, and I will absolutely keep using it. It accelerates exploration and makes ideas tangible much faster than traditional workflows. But it also introduces a new responsibility, where designers now have the ability to generate artifacts that look like finished products long before the thinking behind them is finished. And that means the challenge is no longer just designing interfaces, it is designing the conditions for the right conversations to happen before those interfaces feel real.
