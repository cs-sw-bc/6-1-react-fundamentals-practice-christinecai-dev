# 6.1-React-Fundamentals-Practice: Movie Showcase Page (Nested Components)

## Goal

Build a small React page using **nested components**. The focus is on:

* Creating multiple components
* Nesting components inside a parent component
* Passing props correctly

---

## Required Component Structure

```
App
  → MoviePage
      → MovieBanner
      → MovieDetails
      → CastList
          → CastCard (multiple)
```

---

## Components to Build

### 1) `MoviePage`

This is the parent component that brings everything together.
It should render:

* `<MovieBanner />`
* `<MovieDetails />`
* `<CastList />`

---

### 2) `MovieBanner`

Display:

* Movie title
* Background image (can be an `<img>` or a `div` with inline background styling)

Props (suggested):

* `title`
* `bannerImage`

---

### 3) `MovieDetails`

Display:

* Movie description
* Release year

Props (suggested):

* `description`
* `year`

---

### 4) `CastList`

This component should render:

* A heading like "Cast"
* **At least 3** `<CastCard />` components inside it

You may hardcode the cast cards (no `map` required).

---

### 5) `CastCard`

Each cast card should display:

* Actor name
* Character name
* Actor photo (use a URL)

Props (suggested):

* `actorName`
* `characterName`
* `actorImage`

---

## Requirements

* Your app must include **all components listed above**.
* Components must be properly **imported and used**.
* Use **props** in at least 2 components.
* Use JSX correctly (one parent element returned, `{}` for variables).
* Use simple styling (inline `style={{ }}` is fine).

---

## Suggested Content (You Can Change It)

Pick any movie you like (real or fictional). You must include:

* Title
* Banner image
* Description
* Release year
* At least 3 cast members

---

## Stretch Goal (Optional)

Add one more component inside `MoviePage`:

* `RatingsBox` (IMDB rating + short review)

Keep it simple and consistent with the structure above.
