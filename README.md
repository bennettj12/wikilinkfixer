# wikilinkfixer
Converts list of wiki media URLs with the 'File:' url structure to a list of the actual source file URLs with the /#/##/ hash structure.
```console
mwfix {listPath} {urlStructure}
```
Example from wikitravel:
https://wikitravel.org/en/File:Belum_Temenggor_Forest_Reserve_Banner.jpg

If this link is in a list called `list.txt`, and it is in our current directory, we can convert it with this command:
```console
mwfix "list.txt" "/upload/shared/"
```
Output from mwfix: 
https://wikitravel.org/upload/shared/b/bf/Belum_Temenggor_Forest_Reserve_Banner.jpg

* list.txt is our source file
* "/upload/shared/" is the file structure after the TLD and up to the hash that wikitravel uses.

Some wikis have images hosted on a different domain or with a subdomain, this tool won't work for those, but you can start with this and then you bulk find/replace to finish the list.
