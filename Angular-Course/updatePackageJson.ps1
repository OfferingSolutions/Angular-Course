Get-ChildItem -recurse | 
    where {$_.name -eq "package.json"} | 
    foreach { 
        cd $_.DirectoryName; 
        Write-Output $_.DirectoryName;       
        
        if ( Test-Path "./node_modules" ) {
            echo $_.DirectoryNamecls;
            rimraf node_modules
        }

        
        if ( Test-Path "./package-lock.json" ) {
            echo $_.DirectoryNamecls;
             Remove-Item .\package-lock.json -Force;
        }
		
		if ( Test-Path "./yarn.lock" ) {
            echo $_.DirectoryNamecls;
             Remove-Item .\yarn.lock -Force;
        }

        ncu -a

        <# Remove-Item .\node_modules -Force -Recurse #>
    }
    cd ..