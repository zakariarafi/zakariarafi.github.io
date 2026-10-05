# Personal website maintenance

This site keeps al-folio as its base and adds personal styles in `assets/css/personal.css`.

- Edit your bio, photo, location, and interest tags in `_pages/about.md`.
- Edit the home page sections in `_layouts/about.liquid`.
- Edit research topics in `_pages/projects.md` and code links in `_pages/repositories.md`.
- Update contact identifiers in `_data/socials.yml` and site metadata in `_config.yml`.
- Upstream demo posts, news, projects, CV, publications, teaching, and people pages are excluded from the build. Their source remains available as examples. Add your own content before enabling a section again; remove its exclusion from `_config.yml` and set its navigation as needed.

## Local preview

Use Ruby 3.3 and the bundled dependencies:

```sh
bundle install
bundle exec jekyll serve
```

The existing GitHub Actions deployment publishes changes pushed to `main` or `master`. Review a branch or pull request before merging.
