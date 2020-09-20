# Shared Drive Analyzer

### Requirements:
- python3
- node.js
- Powershell (or some command-line ability/software)

### Files:
- findrec.js
- texttocsv.py

### Usage:
1. change the file-path by hard-coding a new one into **findrec.js** (Wherever you need the files to searched for) **line 36**
2. change the output file in **findrec.js** if you want to name it something meaningful (Hard-coded) **line 26**
    - if this is done, be sure to change the input file in **texttocsv.py** (Also Hard-coded) **line 6**
3. run `>node .\findrec.js` on command line
4. run `>python .\texttocsv` on command line
5. **texttocsv.py** will create **log.csv**
6. Use Microsoft Excel or Google Sheets to open the **log.csv** file

### Notes:
Should be able to use relative or absolute paths at any stage of this.
Remember, even the .txt/.csv files need a filepath, absolute or relative. This is where the file will be saved

### Needs to be Fixed/Implemented:
- User involvement (no more hard-coding), user should able to select directory
- GUI support? (Don't want to use command line for everything)
- smoother transition (shouldn't have to run two separate codes on command line)
- removal of middle files (i.e. the generated .txt file)
- automation of opening spreadsheet
