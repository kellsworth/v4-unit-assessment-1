/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = 'Git is awesome!'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = 'GitHub is great!'


//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property
    will be a string with a description of what that git command does.  The 'code' property should be a
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties
    following the guidelines above to describe the init command.
*/

//CODE HERE

const init = {
    description: 'create a new Git repository',
    code: 'git init',
}



//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    description: 'copies the github file',
    code: 'git clone copy of github url',

}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    description: 'state of the current directory',
    code: 'git status'
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties
    following the guidelines above to describe the add command.
*/

//CODE HERE

const add = {
    description: 'stage everything in the directory for an initial commit',
    code: 'git add .',
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

const commit = {
    description: 'commit staged snapshots',
    code: 'git commit -m"description',
}
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
const addRemote = {
    description: 'connection to a remote repository',
    code: 'git remote add [name] [URL]'
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
    description: 'The push array method adds, or pushes an item',
    code: 'git push'
}