Get-ChildItem -recurse | 
    where {$_.name -eq "package.json"} | 
    foreach { 
        cd $_.DirectoryName; 
        Write-Output $_.DirectoryName;       
        
        if ( Test-Path "./node_modules" ) {
            echo $_.DirectoryNamecls;
			"FOund node_modules, deleting"
            rimraf node_modules
        }


        <# Remove-Item .\node_modules -Force -Recurse #>
    }
    cd ..