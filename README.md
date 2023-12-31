# Aquiferized Tyndale Open Bible Dictionary
Tyndale Bible Dictionary articles, in English, adapted ahead of translation into other languages.

## Directory structure
- `adapted-articles`: The individual “aquiferized” articles, adapted and ready for international translation.
- `changelog`: A recap of the major changes made to each article and the reason why.
- `original-articles`: The original Tyndale articles split into single files. (More on the splitting below.) The files shouldn't be edited. Their presence allow easy comparison between the adapted and the original files.
- `scripts`: Transformation scripts for the project
  - `get_articles.xsl`: XSLT transformation script which takes the articles from the `tyndale-source-files` and splits them into single file articles in the `original-articles` folder. This file was meant to be used from within an XML editing tool such as the “Oxygen XML Editor” (non-free).
  - `reformat_to_tyndale_space_scheme.mjs`: JavaScript transformation script, which reads all the XML files of a given directory, then attempts to apply to them the same spacing scheme found in the original Tyndale files, and finally writes the files to the `transformed` directory.
- `transformed`: This directory is untracked, and therefore not present in the repository. It is automatically created when running the `reformat_to_tyndale_space_scheme.mjs` script.
- `tyndale-source-files`: The original untransformed “Tyndale Open Bible Dictionary” which can be otherwise downloaded from the [Tyndale Open Resources](https://tyndaleopenresources.com/) website.

## The `General Style Guide.md` file
This guide is found at the root of the project and documents the adaptation choices that were taken. It may be accessed directly [here](General%20Style%20Guide.md).

## License
[Aquiferized Tyndale Open Bible Dictionary](https://github.com/mvh-solutions/aquiferized-tbd-english) © 2023 by [BiblioNexus Foundation](https://lnkd.in/dHk8GNXB) is licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1).

Work adapted from [Tyndale Open Bible Dictionary](https://tyndaleopenresources.com/) © 2023 by [Tyndale Open Resources](https://tyndaleopenresources.com/) licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1).
