# Aquiferized Tyndale Open Bible Dictionary
Tyndale Bible Dictionary articles, in English, adapted ahead of translation into other languages.

## Directory structure
- `adapted-articles`: The individual aquiferized articles, adapted and ready for international translation.
- `original-articles`: The original Tyndale articles split into single files. (More on the splitting below.) The files shouldn't be edited. Their presence allow easy comparison between the adapted and the original files.
- `scripts`: Transformation scripts for the project
  - `get_articles.xsl`: XSLT transformation script which takes the articles from the `tyndale-source-files` and splits them into single file articles in the `original-articles` folder. This file was meant to be used from within an XML editing tool such as the “Oxygen XML Editor” (non-free).
  - `reformat_to_tyndale_space_scheme.mjs`: JavaScript transformation script, which attempts to apply the same spacing scheme found in the original Tyndale files.
- `tyndale-source-files`: The original untransformed “Tyndale Open Bible Dictionary” which can be otherwise downloaded from the [Tyndale Open Resources](https://tyndaleopenresources.com/) website.

## License
[Aquiferized Tyndale Open Bible Dictionary](https://github.com/mvh-solutions/aquiferized-tbd-english) © 2023 by [Biblionexus Foundation](https://lnkd.in/dHk8GNXB) is licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1).

Work adapted from [Tyndale Open Bible Dictionary](https://tyndaleopenresources.com/) © 2023 by [Tyndale Open Resources](https://tyndaleopenresources.com/) licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1).
