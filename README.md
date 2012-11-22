epub-tmpl
===========

# What It Does

Provides reading system templates, single HTML file templates for viewing Epub content in the browser. These can be called selectively based on the type of Epub, type of content it carries, or as a fixed feature of a larger reading system


# Design

The design of this module is dependent on a few assumptions: the reading systems here are meant to be fast, compact, lightweight, and heavily optimized for single file usage. The configuration for particular epub content is meant to be injected into the template. All CSS, Javascript and graphical assets should be packaged within this file. Assets can be worked with in separate files but the final template must be a single html file, minified, with a single line on its own for configuration injection.