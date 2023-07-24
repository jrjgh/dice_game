# dice rogueli(k|t)e
#### summary
a dungeon-crawling game where the dungeon, world-map, monsters and weapons are all dice

#### gameplay/progression
individual events such as room choice and moves in combat are determined by dice rolls.
the player's choices may include things such as class which determine which dice become available, or equipment
which may affect the probabilities of certain outcomes. For example, a shortsword die may have three 3 faces and three
4 faces, representing a more consistent weapon, while a greataxe may have three 7 faces and three blank faces. A piece
of armor may have six 2-faces, indicating that it blocks 2 damage no matter what, while a shield may have three 4 faces
representing the greater protection with limited coverage provided by a shield

#### die/dice
a set of faces which represent equally probable outcomes
to "roll" a die means to generate one of its possible outcomes

#### dice pool
a set of dice which all get rolled together

#### dungeon
the faces on a dungeon die represent doors
a door can be terminal, or it can link to another die
move through the dungeon by rolling the die for the current section. If you roll the door to the next section, you move there.
the dungeon display looks like an unfolded die, or several unfolded die touching on the edges

##### terminal nodes
monster
treasure
story?

#### combat
During combat, you roll your weapon and armor dice, while enemies roll their attack dice.
Your action die can contain spells or items.

#### monster


#### ally

#### self
the self die allows the player to set up several actions which will be selected from randomly
- heal
- attack
- defend
- specific item

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
