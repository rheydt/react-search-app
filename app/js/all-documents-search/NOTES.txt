Necessary changes made to markup:
- The contents of each results item needs to be wrapped in a <div> or other element
- "Page 1 of 10" text in pagination needs to be wrapped in a <span> or <div>
- The search keyword <input> needs to use placeholder="Country Specific Search" instead of value="Country Specific Search"
- Since more than 1 tag per result item / document is possible, the list of tags needs to be wrapped in a <div> or <ul> element
- <button type="submit" value="Submit">Submit</button> should not have a value attribute
***

Necessary changes that need to be made to CSS:
- Update style so wrapping the pagination "Page X of Y" text in a div doesn't push it onto it's own line
- The <dic style="display: none;"> element that wraps the filter dropdown list cannot have hardcoded inline style - the JS will handle this

***

Reccomendations for HTML best practices:
- No hardcoded ids - if multiple of these components is added to the page, the page's HTML will be invalid.
    - found: <form id="form2"> wrapping controls
    - found: <input id="query"> on search field
    - found: <button id="search"> on submit button
    - found: <input id="hdCountrypage"> on hidden input immediately before search input field
- All <input> elements need a closing tag
    - found: <input type="checkbox"> in dropdown list of filters (?)
    - found <input type="text"> for search term field
    - found: <input type="hidden"> (2 elements, not sure if they should be removed)
- <fieldset> shouldn't be wrapped around the search input box, a hidden input, and the submit button (and the clear button?)

***

Reccomendations for CSS best practices:
- Use BEM and/or SMACCS systems for CSS class names to keep expose the DOM structure
- Make sure to use class names that are very specific and unique (the above recommendation helps you do that).
    - e.g. <button type="submit" class="text"> - text is generic and likely to be used again, or to get confused with the type="text" attribute available on inputs

***

Reccomendations for Accessibility best practices:
- Next/previous controls in pagination should use <button> elements, not <a>, since they don't navigate the user to a new page
- Numbered list of pages should use a <ul> or <nav> element.
- Using an <h3> for the section title and then an <h6> element for document titles in results skips heading levels, which is invalid markup for accessibility. Heading tags should be used for structuring data, not styling, and shouldn't skip levels.
    * Tip: Think about how the Table of Contents is formatted in a book, and it's purpose.
- Don't use input placeholders or hardcoded values to label fields, because the text disappears as soon as the field is focused. Instead, use the <label> element.
- Use the <select> elements for filter options instead of <input type="checkbox"> (?)
- If using <input type="checkbox" />, use <label> instead of <a>, and associated the two fields with the "name" and "for" attributes

***

Questions:
- Can hidden inputs at the top of the form be removed? Not sure if they have a purpose I'm unaware of.
- What purpose does the hidden input immediately before the search input have? Can it be removed?
- The dropdown of filters are shown in 2 columns, each in their own <ul> element.
    - Is this for visual purposes only, or does each filter "belong" in a certain group?
    - Do authors need the ability to choose which filters go in which column?
    - If more filters are available, does the length of each list increase, or should the number of columns increase?
    *** Let me know if you don't have strong feelings about 2 <ul> elements, because it'd be easier for me and more semantic and accessible to group them in a single <ul> element and then use flexbox (recommended), CSS columns, or another CSS method to wrap the results into multiple columns.

