Get-ChildItem -recurse | 
    where {$_.name -eq "package.json"} | 
    foreach { 
        cd $_.DirectoryName; 
        Write-Output $_.DirectoryName;       
        
        if ( Test-Path "./package-lock.json" ) {
            echo $_.DirectoryNamecls;
             Remove-Item .\package-lock.json -Force;
        }


        <# Remove-Item .\node_modules -Force -Recurse #>
    }
    cd ..