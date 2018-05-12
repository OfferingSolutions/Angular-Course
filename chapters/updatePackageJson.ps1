Get-ChildItem -recurse | 
    where {$_.name -eq "package.json"} | 
    foreach { 
        cd $_.DirectoryName; 
        Write-Output $_.DirectoryName;

        npm i

        <# Remove-Item .\node_modules -Force -Recurse #>
    }
    cd ..