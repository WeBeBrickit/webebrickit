import { BlogPost } from './blog-post';

export const BLOGPOSTS: BlogPost[] = [
    {
        id: 2,
        title: "Style",
        date: new Date('2020-02-04T02:49:00'),
        body: "I'm using the Angular CLI to generate components and scaffolding quicker.\nOrganization is not my strong suit, but at least a clean slate means I can use best practices (for now).\n\n" +
        "I'll also be using Angular Material where convinient.\n\nYou'll notice I've added my snazzy little logo to the top of the page.\n" +
        "I'm left handed and have always liked the \"southpaw\" moniker.\nThis logo is simple, and well balanced. Strong shapes.\n\n" +
        "It also represents my initials.\nThe three dots translate to \"S\" in morse code and the triangle is a delta for \"D\"\n\n" +
        "...yeah, I know it's a stretch."
    },
    {
        id: 1,
        title: "Hello World",
        date: new Date('2021-02-01T00:19:00'),
        body: "Today, I started a website.\n\nMy name is Stevie, I'm a software developer and artist living in Atlanta, Ga.\n" +
        "This is my personal internet playground / work diary.\n\nIt's bare bones right now, but soon it will look more like a blog.\n" +
        "It's a place for me to post my ideas, things that I like, old and current projects.\n\nThe website is built with Angular JS.\n" +
        "It's being hosted on a web server running Ubuntu and NGINX.\nI'll add the style sheets later, so for now enjoy that clean black font on white nothingness."
    }
];