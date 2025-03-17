function changeTagline() {
    const taglines = [
        "Science, Technology & Ethics – Building a Better Tomorrow.",
        "Innovating the Future, Exploring the Universe.",
        "From Cosmos to Code – Engineering the Impossible."
    ];
    let randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
    document.getElementById("tagline").innerText = randomTagline;
}
