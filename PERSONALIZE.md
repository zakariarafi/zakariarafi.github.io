# Personal website maintenance

This site keeps Jekyll/al-folio and uses a minimal white academic design.

- Bio, photo, location: '\_pages/about.md'.
- Homepage sections: '\_layouts/about.liquid'. Awards stay last.
- Video cards and recommended articles: '\_data/contents.yml'.
- Awards: '\_data/awards.yml'.
- Quotes: '\_data/quotes.yml'.
- Contact identifiers: '\_data/socials.yml'.
- White theme: 'assets/css/personal.css'. Dark mode is disabled in '\_config.yml'.
- Content filters, mobile navigation, and demo previews: 'assets/js/personal.js'.
- Teaching/resources page: '\_pages/teaching.md', now included in the build.

## Replace the demo videos

Each video has a platform, title, description, duration, artwork, URL, and demo flag.
To publish a real video card, add the full YouTube, TikTok, or Instagram post URL
to 'url', then set 'demo: false'. The preview button becomes a direct video link.
Leave the URL empty to retain the clearly marked demo preview.

The two recommended readings link to Raihan Sultan's original articles and
credit him as their author. Replace these with your own articles when ready.
The 2025 UChicago-Indonesia award is Zakaria's, as confirmed during implementation.

## References

- https://github.com/Dr-Left/dr-left.github.io — academic sidebar and short quotes.
- https://github.com/raihansltn/raihansltn.github.io — article cards, topics, dates.
- https://github.com/SieDeta/siedeta.github.io — compact Awards list.

The styling is implemented locally; no template code from those references was copied.

## Preview and publish

Use Ruby 3.3 and the repository's existing dependencies:

    bundle install
    bundle exec jekyll serve

Visit http://localhost:4000. The current GitHub Actions workflow builds and
publishes changes pushed to main or master. Review the design before merging.

Upstream demo posts, projects, news, publications, CV, and people pages remain
excluded from the build. Add personal content before enabling those sections.

## Validation

The Jekyll build was checked, along with desktop and mobile layouts, all five
content filters, demo dialog opening and closing, and mobile navigation.
Widths checked: 1440, 768, 390, and 320 pixels.
