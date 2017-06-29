Necessary changes made to markup:
- Added a wrapping div around each result item
- "Page 1 of 10" text in pagination needs to be wrapped in a <span> or <div>

***

Reccomendations for HTML best practices:
- No hardcoded ids - if multiple of these components is added to the page, the page's HTML will be invalid.
    - found: <form id="form2"> wrapping controls
    - found: <input id="query"> on search field
- All <input> elements need a closing </input> tag
    - found: <input type="checkbox"> in dropdown list of filters
    - found <input type="text"> for search term field
    - found: <input type="hidden"> (2 elements, not sure if they should be removed)

***

Reccomendations for CSS best practices:
- Use BEM and/or SMACCS systems for coming up with unique classnames that make the DOM structure clear

***

Reccomendations for Accessibility best practices:
- Next/previous controls in pagination should use <button> elements, not <a>
- Numbered list of pages should use a <ul> or <nav> element


***

Questions:
- Can hidden inputs at the top of the form be removed? Not sure if they have a purpose I'm unaware of.

