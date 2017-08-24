Get-ChildItem -recurse | 
    where {$_.name -eq "package.json"} | 
    foreach { 
        cd $_.DirectoryName; 
        Write-Output $_.DirectoryName; 
    
        if ( Test-Path "./node_modules" ) {
            echo $_.DirectoryNamecls;
            Remove-Item .\node_modules -Force -Recurse;
        }

        ncu -a

        <# Remove-Item .\node_modules -Force -Recurse #>
    }
    cd ..