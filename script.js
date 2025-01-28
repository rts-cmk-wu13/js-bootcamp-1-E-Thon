let quotes = ["“Curse of the self-taught: fear that you know only points here and there, islands of knowledge, and between them are chasms into which you will fall in humiliating failure, a fear that followed me from the first time I learned how to code.” – Ellen Ullman, Life in Code", "“The most dangerous phrase in the language is, ‘We’ve always done it this way.'” – Grace Hopper, computer pioneer and naval officer", "“Programming isn’t about what you know; it’s about what you can figure out.” – Chris Pine, Learn to Program", "“Code is read much more often than it is written.” – Guido Van Rossum, creator of Python", "“You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity.” – John Romero, video game developer and programmer", "“This was one of the best parts of being a coder, and an artist: the thrill of being in the middle of creating something delightful. It’s like the anticipation of eating freshly baked bread after its aroma fills the room.” – Dr. Joy Buolamwini, Unmasking AI", "“Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.” – Patrick McKenzie, software engineer", "“The code you write makes you a programmer. The code you delete makes you a good one. The code you don’t have to write makes you a great one.” – Mario Fusco, Principal Software Engineer at Red Hat", "“Code is like humor. When you have to explain it, it’s bad.” – Cory House, React and JavaScript specialist", "“The more I study, the more insatiable do I feel my genius for it to be.” – Ada Lovelace, the world’s first computer programmer"]

let quotesElm = document.querySelector("blockquote")

if (quotesElm) {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    // Math.random() * quotes.length) = tilfældigt tal mellem 1 og 0 gange antallet af elementer i arrayet
    // Math.floor = afrunder nedad til heltal
    // da arrayet starter fra 0 til 9, bliver alle 10 muligheder for random visning
    // fx.: Math.random() = 0.97 => 0.97*10 = 9.7 => svarer til det 10. element i arrayet, da den tæller 0 med
  
    quotesElm.innerHTML = quotes[randomIndex];
}